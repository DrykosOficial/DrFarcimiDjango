from django.db import models

class Producto(models.Model):
   
    nombre = models.CharField(max_length=64)
    precio = models.IntegerField(verbose_name='$ ')
    image = models.ImageField(null=True, blank=True)
    def __str__(self):
        return f'{self.nombre} -> {self.precio}'
