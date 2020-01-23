from rest_framework import serializers
from TeamWork.models import GoalProgress

class GoalProgressSerializer(serializers.ModelSerializer):

    class Meta:
        model = GoalProgress
        fields = ['goal', 'progress_description', 'progress_date']
