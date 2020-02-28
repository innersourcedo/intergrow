from TeamWork.models import TeamEmployee
from TeamWork.serializers.sampleSerializer import SampleTeamEmployeeSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class SampleTeamEmployeeList(APIView):
    def get(self, request, format = None):
        """
        List all TeamEmployee, or create a new TeamEmployee.
        """
        teamEmployee = TeamEmployee.objects.all()
        serializer = SampleTeamEmployeeSerializer(teamEmployee, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = SampleTeamEmployeeSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)