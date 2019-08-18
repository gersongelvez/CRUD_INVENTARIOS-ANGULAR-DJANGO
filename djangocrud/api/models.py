from django.db import models

class Movie(models.Model):
    title=models.CharField(max_length=32)
    desc=models.CharField(max_length=256)
    year=models.IntegerField()

class Tipo(models.Model):
    nombre=models.CharField(max_length=32)

class Estado(models.Model):
    nombre=models.CharField(max_length=32)

class Area(models.Model):
    nombre=models.CharField(max_length=32)

class Persona(models.Model):
    nombres=models.CharField(max_length=32)
    apellidos = models.CharField(max_length=32)
    cargo = models.CharField(max_length=32)

class Bien(models.Model):
    nombre=models.CharField(max_length=32)
    descripcion = models.CharField(max_length=400)
    serial=models.CharField(max_length=32, null=True)
    valor=models.IntegerField(null=True)
    fecha=models.CharField(max_length=32, null=True)
    tipo = models.ForeignKey(Tipo, on_delete=models.CASCADE, null=True)
    estado = models.ForeignKey(Estado, on_delete=models.CASCADE, null=True)
    area = models.ForeignKey(Area, on_delete=models.CASCADE, null=True)
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE, null=True)

