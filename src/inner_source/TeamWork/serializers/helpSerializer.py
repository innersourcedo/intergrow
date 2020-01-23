from rest_framework import serializers
from TeamWork.models import Help

class HelpSerializer(serializers.ModelSerializer):

    class Meta:
        model = Help
        fields = ['mentee', 'help_discription', 'help_date']
