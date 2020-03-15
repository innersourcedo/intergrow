from rest_framework import serializers
from TeamWork.models import Response, Employee

class EmployeeSeril(serializers.ModelSerializer):
    # user = UserSerializer()

    class Meta:
        model = Employee
        fields = '__all__'


class customResponseSerializer(serializers.ModelSerializer):
    mentor = EmployeeSeril(read_only=True)
    class Meta:
        model = Response
        
        fields = ['id','help_request', 'mentor', 'response_discription', 'response_date']

class ResponseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Response
        
        fields = '__all__'


