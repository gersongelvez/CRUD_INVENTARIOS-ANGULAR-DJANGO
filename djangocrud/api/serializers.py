from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Movie, Tipo, Estado, Area, Persona, Bien

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = [ 'id', 'title', 'desc', 'year']

class MovieMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = [ 'id', 'title']

class TipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo
        fields = [ 'id', 'nombre']

class EstadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado
        fields = [ 'id', 'nombre']

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = [ 'id', 'nombre']

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = [ 'id', 'nombres','apellidos','cargo']

class BienSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bien
        fields = [ 'id', 'nombre','descripcion','serial','valor','fecha','tipo','area','persona']
