from rest_framework import serializers
from TeamWork.models import TeamAllocation
from TeamWork.serializers.employeeSerializer import EmployeeSerializer


class TeamAllocationSerializer(serializers.ModelSerializer):
    member_id =  EmployeeSerializer()

    class Meta:
        model = TeamAllocation
        fields = ['id', 'team_id', 'member_id', 'start_date', 'end_date']
