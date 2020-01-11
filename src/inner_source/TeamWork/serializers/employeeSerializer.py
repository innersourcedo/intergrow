from rest_framework import serializers
from TeamWork.models import Employee

class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = ['employee_id', 'full_name', 'first_name', 'last_name', 'email', 'phone_number', 'address']
