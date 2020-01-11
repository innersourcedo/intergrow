from rest_framework import serializers
from TeamWork.models import Department

class DepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Department
        fields = ['department_name', 'department_description', 'department']
