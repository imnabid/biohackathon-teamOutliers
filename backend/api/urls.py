from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_summary),
    path('search/', views.get_specimen_data),
]