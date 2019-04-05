from .settings import *

STATIC_ROOT = '/home/slaponicus/sites/Reactify-Django/assets/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "./assets"),
]

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, '../webpack-stats.prod.json'),
    }
}
