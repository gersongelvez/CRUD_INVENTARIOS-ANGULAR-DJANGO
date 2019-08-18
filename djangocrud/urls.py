from django.contrib import admin

from django.urls import include, path
from rest_framework import routers
from djangocrud.api import views
from rest_framework_swagger.views import get_swagger_view
from rest_framework.schemas.coreapi import AutoSchema

router = routers.DefaultRouter()
router.register(r'movies', views.MoviesViewSet)
router.register('tipo', views.TipoViewSet)
router.register('estado', views.EstadoViewSet)
router.register('area', views.AreaViewSet)
router.register('persona', views.PersonaViewSet)
router.register('bien', views.BienViewSet)

schema_view = get_swagger_view(title="Inventarios Swagger")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', schema_view)
]
