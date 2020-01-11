from rest_framework import serializers
from TeamWork.models import OrgRole

class OrgRoleSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrgRole
        fields = ['orgRole_name', 'orgRole_description', 'orgRole']
