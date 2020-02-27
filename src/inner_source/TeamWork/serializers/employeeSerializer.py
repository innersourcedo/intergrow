from rest_framework import serializers
from TeamWork.models import Employee
# from TeamWork.serializers.userSerializer import UserSerializer


class EmployeeSerializer(serializers.ModelSerializer):
    # user = UserSerializer()

    class Meta:
        model = Employee
        fields = ['id', 'employee_id', 'full_name', 'first_name', 'last_name', 'email', 'phone_number', 'address', 'user']
