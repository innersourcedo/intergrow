
from django.urls import path 

from . import mnmProfileView

urlpatterns = [path('', mnmProfileView.index, name= 'index'), ]
