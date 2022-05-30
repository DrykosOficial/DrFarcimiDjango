from django import forms
from django.forms import ModelForm
from .models import Auto, Servicio, Cliente, Mecanico

class AutoForm(ModelForm):
    class Meta:
        model = Auto
        fields = ['patente','marca','anno','color']
        
class ServicioForm(ModelForm):
    class Meta:
        model = Servicio
        fields = ['idservicio','nombreservicio','precio']

class ClienteForm(ModelForm):
    class Meta:
        model = Cliente
        fields = ['nombre','telefono','correo']

class MecanicoForm(ModelForm):
    class Meta:
        model = Mecanico
        fields = ['rutMecanico','nombreMecanico','telefonoMecanico','correoMecanico']
