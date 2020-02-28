from rest_framework import serializers
from TeamWork.models import IndividualGoalProgress

class IndividualGoalProgressSerializer(serializers.ModelSerializer):

    class Meta:
        model = IndividualGoalProgress
        fields = ['id', 'individual_goal', 'progress_description', 'progress_date']
