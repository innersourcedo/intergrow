from TeamWork.models import TeamEmployee
from TeamWork.serializers.teamEmployeeSerializer import TeamEmployeeSerializer
# class-based views
from django.http import Http404, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class TeamEmployeeList(APIView):
    def get(self, request, format = None):
        """
        List all TeamEmployee, or create a new TeamEmployee.
        """
        teamEmployee = TeamEmployee.objects.all()
        serializer = TeamEmployeeSerializer(teamEmployee, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = TeamEmployeeSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class TeamEmployeeDetail(APIView):
    def get_object(self, pk):
        try:
            return TeamEmployee.objects.get(pk = pk)
        except TeamEmployee.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        teamEmployee = self.get_object(pk)
        serializer = TeamEmployeeSerializer(teamEmployee)
        return Response(serializer.data)

    def put(self, request, pk):
        teamEmployee = self.get_object(pk)
        serializer = TeamEmployeeSerializer(teamEmployee, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(teamEmployee.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        teamEmployee = self.get_object(pk)
        teamEmployee.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)

# class FindByTeamId(APIView):
#     def get(self, request, team_id, format = None):
#         team_emp = TeamEmployee.objects.filter(team)







