from rest_framework import serializers
from TeamWork.models import GoalProgress

class GoalProgressSerializer(serializers.ModelSerializer):

    class Meta:
        model = GoalProgress
        fields = ['id', 'goal', 'progress_description', 'progress_date']
