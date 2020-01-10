from rest_framework import serializers
from TeamWork.models import TeamEmployee

class TeamEmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = TeamEmployee
        fields = ['team', 'employee', 'involved_date', 'role']
