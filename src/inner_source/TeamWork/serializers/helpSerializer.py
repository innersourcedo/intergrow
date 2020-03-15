from rest_framework import serializers
from TeamWork.models import Help, Employee


class EmployeeSeril(serializers.ModelSerializer):
    # user = UserSerializer()

    class Meta:
        model = Employee
        fields = '__all__'



class HelpSerializer(serializers.ModelSerializer):
    mentee = EmployeeSeril(read_only=True)
    class Meta:
        model = Help
        fields = ['id','mentee','help_topic','help_state','help_discription', 'help_date']
