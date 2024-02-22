"""
Django settings for xblock-drag-and-drop-v2 project.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
from __future__ import absolute_import
import os
BASE_DIR = os.path.dirname(__file__)


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
# This is just a container for running tests, it's okay to allow it to be
# defaulted here if not present in environment settings
SECRET_KEY = os.environ.get('SECRET_KEY', '&=@m=qyqg#l!f99ouuuinpbsv0ah001unk@q^7)bkr^^n5@q1=')

# SECURITY WARNING: don't run with debug turned on in production!
# This is just a container for running tests
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'statici18n',
    'recommender',
)

# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_URL = '/static/'

# statici18n
# http://django-statici18n.readthedocs.io/en/latest/settings.html

LANGUAGES = [
    ('ar', 'Arabic'),
    ('de', 'German'),
    ('en', 'English - Source Language'),
    ('eo', 'Esperanto'),
    ('es_419', 'Spanish (Latin America)'),
    ('fr', 'French'),
    ('he', 'Hebrew'),
    ('hi', 'Hindi'),
    ('it', 'Italian'),
    ('ja', 'Japanese'),
    ('ko', 'Korean (Korea)'),
    ('nl', 'Dutch'),
    ('pl', 'Polski'),
    ('pt_BR', 'Portuguese (Brazil)'),
    ('pt_PT', 'Portuguese (Portugal)'),
    ('ru', 'Russian'),
    ('tr', 'Turkish'),
    ('zh_CN', 'Chinese (China)'),
]

LOCALE_PATHS = [os.path.join(BASE_DIR, "recommender", "conf", "locale")]

STATICI18N_DOMAIN = 'text'
STATICI18N_NAMESPACE = 'RecommenderXBlockI18N'
STATICI18N_PACKAGES = (
    'recommender',
)
STATICI18N_ROOT = 'recommender/public/js'
STATICI18N_OUTPUT_DIR = 'translations'
