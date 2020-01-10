from rest_framework import serializers
from TeamWork.models import Response

class ResponseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Response
        fields = ['help_request', 'mentor', 'response_discription', 'response_date']
