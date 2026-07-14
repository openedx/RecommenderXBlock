WORKING_DIR := recommender
JS_TARGET := $(WORKING_DIR)/public/js/translations

upgrade: ## update uv.lock with the latest packages
	uv run --with edx-lint edx_lint write_uv_constraints pyproject.toml
	uv lock --upgrade

extract_translations: ## extract strings to be translated, outputting .po files
	cd $(WORKING_DIR) && i18n_tool extract --no-segment --merge-po-files

compile_translations: ## compile translation files, outputting .mo files for each supported language
	cd $(WORKING_DIR) && i18n_tool generate -v
	python manage.py compilejsi18n --namespace RecommenderXBlockI18N --output $(JS_TARGET)
