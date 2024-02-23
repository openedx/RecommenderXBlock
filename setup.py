"""Setup for recommender XBlock."""

from __future__ import absolute_import

import os
import re
import subprocess

from setuptools import setup
from setuptools.command.install import install as _install

base_path = os.path.dirname(__file__)
README = open(os.path.join(base_path, "README.rst")).read()


class XBlockInstall(_install):
    """Custom XBlock install command."""

    def run(self):
        _install.run(self)
        self.compile_translations()

    def compile_translations(self):
        """
        Compiles textual translations files(.po) to binary(.mo) files.
        """
        self.announce('Compiling translations')
        try:
            for dirname, _, files in os.walk(os.path.join('recommender', 'translations')):
                for fname in files:
                    if os.path.splitext(fname)[1] == '.po':
                        po_path = os.path.join(dirname, fname)
                        mo_path = os.path.splitext(po_path)[0] + '.mo'
                        self.announce('Compiling translation at %s' % po_path)
                        subprocess.check_call(['msgfmt', po_path, '-o', mo_path], cwd=self.install_lib)
        except Exception as ex:
            self.announce('Translations compilation failed: %s' % getattr(ex, 'message', str(ex)))


def package_data(pkg, root_list):
    """Generic function to find package_data for `pkg` under `root`."""
    data = []
    for root in root_list:
        for dirname, _, files in os.walk(os.path.join(pkg, root)):
            for fname in files:
                data.append(os.path.relpath(os.path.join(dirname, fname), pkg))

    return {pkg: data}


def get_version(file_path):
    """
    Extract the version string from the file at the given relative path fragments.
    """
    filename = os.path.join(os.path.dirname(__file__), file_path)
    with open(filename, encoding='utf-8') as opened_file:
        version_file = opened_file.read()
        version_match = re.search(r"(?m)^__version__ = ['\"]([^'\"]+)['\"]", version_file)
    if version_match:
        return version_match.group(1)
    raise RuntimeError('Unable to find version string.')


VERSION = get_version("recommender/__init__.py")


setup(
    name='recommender-xblock',
    version=VERSION,
    description='recommender XBlock',   # TODO: write a better description.
    long_description=README,
    author='edX',
    author_email='oscm@edx.org',
    url='https://github.com/openedx/RecommenderXBlock',
    packages=[
        'recommender',
    ],
    license='AGPL 3.0',
    entry_points={
        'xblock.v1': [
            'recommender = recommender.recommender:RecommenderXBlock',
        ]
    },
    package_data=package_data("recommender", ["static", "templates", "translations", "public"]),
    cmdclass={
        'install': XBlockInstall,
    },
    keywords="edx recommender",
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: GNU Affero General Public License v3 or later (AGPLv3+)",
        "Natural Language :: English",
        "Programming Language :: Python :: 3",
        'Programming Language :: Python :: 3.8',
    ],
)
