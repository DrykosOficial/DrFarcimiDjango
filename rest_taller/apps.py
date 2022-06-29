from django.apps import AppConfig


class ApiapplicationConfig(AppConfig):
    name = 'ApiApplication'

class RestTallerConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'rest_taller'
