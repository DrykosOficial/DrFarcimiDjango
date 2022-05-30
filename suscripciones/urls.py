from django import views
from django.urls import path
from .views import home, detalles, formularioo, sesion, form_lista, form_servicio, form_mod_servicio,form_del_servicio

urlpatterns = [
    path('',home,name="home"),
    path('detalles',detalles,name="detalles"),
    path('formularioo',formularioo,name="formularioo"),
    path('sesion',sesion,name="sesion"),
    path('form_lista',form_lista,name='form_lista'), # VER LISTA
    path('form_servicio',form_servicio,name='form_servicio'), # AGREGAR DATOS
    path('form_mod_servicio/<id>',form_mod_servicio,name='form_mod_servicio'), # MODIFICAR LOS DATOS
    path('form_del_servicio/<id>',form_del_servicio,name='form_del_servicio'), # ELIMINAR LOS DATOS
]
