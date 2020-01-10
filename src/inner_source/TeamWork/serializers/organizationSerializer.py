from rest_framework import serializers
from TeamWork.models import Organization

class OrganizationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Organization
        fields = ['org_id', 'org_name', 'org_description']
