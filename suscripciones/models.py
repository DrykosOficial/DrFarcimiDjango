
from contextlib import nullcontext
from pyexpat import model
from django.db import models

class Mecanico(models.Model):
    rutMecanico = models.IntegerField(primary_key=True,verbose_name='RUT')
    dvMecanico = models.CharField(max_length=1,verbose_name='DV')
    nombreMecanico = models.CharField(max_length=50,verbose_name='Nombre')
    telefonoMecanico = models.IntegerField(null=True, blank=True, verbose_name='Telefono')
    correoMecanico = models.CharField(max_length=20,null=True, blank=True, verbose_name='Correo')
    

    def __str__(self):
        return self.rutMecanico

class Auto(models.Model):
    patente = models.CharField(max_length=6,primary_key=True,verbose_name='Patente')
    marca = models.CharField(max_length=20,verbose_name='Marca')
    anno = models.IntegerField(verbose_name='Año')  
    color = models.CharField(max_length=20,verbose_name='Color')
    
    def __str__(self):
        return  self.patente

class Servicio(models.Model):
    idservicio = models.AutoField(primary_key=True,verbose_name='#')
    nombreservicio = models.CharField(max_length=50, verbose_name='Nombre Servicio ')
    precio = models.IntegerField(null=True, blank=True, verbose_name='Precio $')
    imagen = models.ImageField(upload_to="servicios",null=True)
    
    
    def __str__(self):
        return  self.nombreservicio
            
class Cliente(models.Model):
    idCliente = models.AutoField(primary_key=True,verbose_name='ID')
    nombre = models.CharField(max_length=50,verbose_name='Nombre')
    telefono = models.IntegerField(null=True, blank=True, verbose_name='Telefono')
    correo = models.CharField(max_length=30,null=True, blank=True, verbose_name='Correo')

    def __str__(self):
        return self.nombre
    

    

