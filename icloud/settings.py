#coding=utf8
"""
Django settings for icloud project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import logging
from logging.handlers import TimedRotatingFileHandler
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '6p!s!mop75qbsxm#fm$6@kwj!x9z_xf$2i8x1v+gj7^zfw=(lm'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'ifile',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'icloud.urls'

WSGI_APPLICATION = 'icloud.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'zh-cn'

TIME_ZONE = 'Asia/Shanghai'

USE_I18N = True

USE_L10N = True

USE_TZ = True

APPEND_SLASH=False   # slash issue

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_URL = '/static/'

TEMPLATE_DIRS = (
    os.path.join(BASE_DIR,  'templates'),
)

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, "static"),
    # '/var/www/static/',
)

# logging.basicConfig(
# level = logging.DEBUG,
# format = '%(levelname)s %(module)s.%(funcName)s Line:%(lineno)d%(message)s',
# filename = BASE_DIR + '/log/filelog.log',
# )

root = logging.getLogger()
if len(root.handlers) == 0:  #避免重复
    level = logging.DEBUG
    filename = BASE_DIR + '/log/filelog.log'
    format = '%(levelname)s %(module)s.%(funcName)s Line:%(lineno)d%(message)s'
    hdlr = TimedRotatingFileHandler(filename,"midnight",1,5)
    fmt = logging.Formatter(format)
    hdlr.setFormatter(fmt)
    root.addHandler(hdlr)
root.setLevel(level)