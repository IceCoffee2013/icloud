import os
import sys

sys.path.append('/var/www/icloud')
os.environ['DJANGO_SETTINGS_MODULE'] = 'icloud.settings'
os.environ['PYTHON_EGG_CACHE'] = '/tmp/.python-eggs'

current_dir = os.path.dirname(__file__)
if current_dir not in sys.path: sys.path.append(current_dir)

import django.core.handlers.wsgi

application = django.core.handlers.wsgi.WSGIHandler()