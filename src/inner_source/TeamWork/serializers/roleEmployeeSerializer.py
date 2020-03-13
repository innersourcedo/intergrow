from rest_framework import serializers
from TeamWork.models import RoleEmployee

class RoleEmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = RoleEmployee
        fields = ['id', 'is_sup_admin', 'is_admin', 'is_team', 'is_employee', 'role_discription']
