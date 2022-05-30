from django.shortcuts import render,redirect
from .models import Servicio
from .forms import ServicioForm

class Persona:
    def __init__ (self, nombre, edad, telefono):
        self.nombre=nombre
        self.edad=edad
        self.telefono=telefono
        super().__init__()
        

# Create your views here.

def home(request):
    return render(request,'suscripciones/index.html')

def detalles(request):
    return render(request,'suscripciones/detalles.html')
        
def formularioo(request):
    return render(request,'suscripciones/formulariocontacto.html')

def sesion(request):
    return render(request,'suscripciones/iniciosesion.html')

def form_lista(request):
    servicio=Servicio.objects.all()
    datos={
        'servicios':servicio
    }
    return render(request,'suscripciones/form_lista.html',datos)



def form_servicio(request):
    datos = {
        'form': ServicioForm()
    }

    if request.method == 'POST':
        formulario = ServicioForm(request.POST)

        if formulario.is_valid():
            formulario.save() #AGREGAR a la BD
            datos['mensaje'] = 'Se guardó el servicio'
        else:
            datos['mensaje'] = 'NO se guardó servicio'
 
    return render(request,'suscripciones/form_servicio.html', datos)

def form_mod_servicio(request, id):
    servicio = Servicio.objects.get(idservicio=id)
    

    datos = {
        'form':ServicioForm(instance = servicio)
    }

    if request.method == 'POST':
        formulario = ServicioForm(data = request.POST, instance = servicio)

        if formulario.is_valid():
            formulario.save() #MODIFICA a la BD
            datos['mensaje'] = 'Se modifico la tabla Auto'
        else:
            datos['mensaje'] = 'NO se modifico la tabla Auto'

    return render(request,'suscripciones/form_mod_servicio.html',datos)   


def form_del_servicio(request, id):
       servicio = Servicio.objects.get(idservicio=id)
       servicio.delete()
       return redirect(to='home')
   
    