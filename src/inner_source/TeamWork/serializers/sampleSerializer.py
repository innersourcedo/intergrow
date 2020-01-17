from rest_framework import serializers
from TeamWork.models import TeamEmployee, Employee, Team


# Here 2 method used to extract the data from database and 
# Both methods can be work so, as per your request you can choose a method

class SampleEmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = ['employee_id', 'full_name', 'first_name', 'last_name', 'email', 'phone_number', 'address']

class SampleTeamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Team
        fields = ['team_id', 'team_name', 'leader', 'start_date']


class SampleTeamEmployeeSerializer(serializers.ModelSerializer):
    employee =  SampleEmployeeSerializer()
    team = SampleTeamSerializer()

    class Meta:
        model = TeamEmployee
        fields = ['team', 'employee', 'involved_date', 'role']
        extra_kwargs = {
            'team': {'allow_null': True, 'required': False},
            'employee': {'allow_null': True, 'required': False}, 
            'involved_date': {'allow_null': True, 'required': False}, 
            'role': {'allow_null': True, 'required': False},     
        }


    # employee = SampleEmployeeSerializer(many=False)
    # team = SampleTeamSerializer(many=False)

    # def create(self, validated_data):
    #     employee = validated_data.pop('employee')
    #     team = validated_data.pop('team')
    #     team_employee = TeamEmployee.objects.create(**validated_data)
    #     return team_employee