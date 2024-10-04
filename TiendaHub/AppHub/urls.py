from django.urls import path, include
from . import views, views_ajax

#app_name = 'AppHub' define un espacio de nombres para las URLs de una aplicación Django, permitiendo evitar conflictos de rutas entre aplicaciones.
app_name = 'AppHub'
urlpatterns = [
    path('', views.Index.as_view(), name='index' ),
   
]