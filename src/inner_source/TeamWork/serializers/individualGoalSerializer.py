from rest_framework import serializers
from TeamWork.models import IndividualGoal

class IndividualGoalSerializer(serializers.ModelSerializer):

    class Meta:
        model = IndividualGoal
        fields = ['id', 'employee', 'goal_discription', 'is_complete', 'is_inprogress', 'start_date', 'end_date']
