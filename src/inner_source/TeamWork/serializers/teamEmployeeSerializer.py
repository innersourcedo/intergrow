from rest_framework import serializers
from TeamWork.models import TeamEmployee, Employee, Team
from TeamWork.serializers.employeeSerializer import EmployeeSerializer
from TeamWork.serializers.teamSerializer import TeamSerializer

class TeamEmployeeSerializer(serializers.ModelSerializer):
    employee =  EmployeeSerializer()
    team = TeamSerializer()

    class Meta:
        model = TeamEmployee
        fields = ['id', 'team', 'employee', 'involved_date', 'role']
        extra_kwargs = {
            'team': {'allow_null': True, 'required': False},
            'employee': {'allow_null': True, 'required': False}, 
            'involved_date': {'allow_null': True, 'required': False}, 
            'role': {'allow_null': True, 'required': False},     
        }

