# Generated by Django 4.0.4 on 2022-06-26 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Carrito', '0002_alter_producto_precio'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]