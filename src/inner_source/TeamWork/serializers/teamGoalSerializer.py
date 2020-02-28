from rest_framework import serializers
from TeamWork.models import TeamGoal

class TeamGoalSerializer(serializers.ModelSerializer):

    class Meta:
        model = TeamGoal
        fields = ['id', 'team', 'goal_discription', 'start_date', 'end_date']
