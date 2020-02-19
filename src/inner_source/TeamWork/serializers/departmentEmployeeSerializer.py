from rest_framework import serializers
from TeamWork.models import DepartmentEmployee

class DepartmentEmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = DepartmentEmployee
        fields = ['employee', 'department', 'emp_role']
