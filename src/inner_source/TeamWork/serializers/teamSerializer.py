from rest_framework import serializers
from TeamWork.models import Team

class TeamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Team
        fields = ['team_id', 'team_name', 'leader', 'start_date']
