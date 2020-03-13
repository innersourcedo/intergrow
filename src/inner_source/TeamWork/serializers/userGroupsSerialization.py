from django.contrib.auth.models import UserGroups
from rest_framework import serializers
from rest_framework.authtoken.models import Token

class UserGroupsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserGroups
        fields = ['id', 'user_id', 'group_id']