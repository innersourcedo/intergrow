from django.contrib.auth.models import Group

from rest_framework import serializers
from rest_framework.authtoken.models import Token

class GroupSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Group
        fields = ['id', 'name']
