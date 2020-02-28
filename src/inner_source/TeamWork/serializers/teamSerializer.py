from rest_framework import serializers
from TeamWork.models import Team
from TeamWork.serializers.employeeSerializer import EmployeeSerializer

class TeamSerializer(serializers.ModelSerializer):
    # leader = EmployeeSerializer()

    class Meta:
        model = Team
        fields = ['id', 'team_id', 'team_name', 'leader', 'start_date']

        
