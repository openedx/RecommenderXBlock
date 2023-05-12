WORKING_DIR := recommender
EXTRACT_DIR := $(WORKING_DIR)/conf/locale/en/LC_MESSAGES
EXTRACTED_DJANGO_PARTIAL := $(EXTRACT_DIR)/django-partial.po
EXTRACTED_DJANGOJS_PARTIAL := $(EXTRACT_DIR)/djangojs-partial.po
EXTRACTED_DJANGO := $(EXTRACT_DIR)/django.po

COMMON_CONSTRAINTS_TXT=requirements/common_constraints.txt
.PHONY: $(COMMON_CONSTRAINTS_TXT)
$(COMMON_CONSTRAINTS_TXT):
	wget -O "$(@)" https://raw.githubusercontent.com/edx/edx-lint/master/edx_lint/files/common_constraints.txt || touch "$(@)"

upgrade: export CUSTOM_COMPILE_COMMAND=make upgrade
upgrade: $(COMMON_CONSTRAINTS_TXT)  ## update the requirements/*.txt files with the latest packages satisfying requirements/*.in
	pip install -r requirements/pip.txt
	pip install -q -r requirements/pip_tools.txt
	pip-compile --upgrade --allow-unsafe --rebuild -o requirements/pip.txt requirements/pip.in
	pip-compile --upgrade -o requirements/pip_tools.txt requirements/pip_tools.in
	pip install -qr requirements/pip.txt
	pip install -qr requirements/pip_tools.txt
	pip-compile --upgrade -o requirements/base.txt requirements/base.in
	pip-compile --upgrade -o requirements/test.txt requirements/test.in
	pip-compile --upgrade -o requirements/ci.txt requirements/ci.in

extract_translations: ## extract strings to be translated, outputting .po files
	cd $(WORKING_DIR) && i18n_tool extract
	mv $(EXTRACTED_DJANGO_PARTIAL) $(EXTRACTED_DJANGO)
	# Safely concatenate djangojs if it exists
	if test -f $(EXTRACTED_DJANGOJS_PARTIAL); then \
	  msgcat $(EXTRACTED_DJANGO) $(EXTRACTED_DJANGOJS_PARTIAL) -o $(EXTRACTED_DJANGO) && \
	  rm $(EXTRACTED_DJANGOJS_PARTIAL); \
	fi
	sed -i'' -e 's/nplurals=INTEGER/nplurals=2/' $(EXTRACTED_DJANGO)
	sed -i'' -e 's/plural=EXPRESSION/plural=\(n != 1\)/' $(EXTRACTED_DJANGO)
