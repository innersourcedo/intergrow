from TeamWork.models import TeamAllocation
from TeamWork.serializers.teamAllocationSerializer import TeamAllocationSerializer, CustomTeamAllocationSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class TeamAllocationList(APIView):
    def get(self, request, format = None):
        """
        List all TeamAllocation, or create a new TeamAllocation.
        """
        teamAllocation = TeamAllocation.objects.all()
        serializer = TeamAllocationSerializer(teamAllocation, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = TeamAllocationSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class TeamAllocationDetail(APIView):
    def get_object(self, pk):
        try:
            return TeamAllocation.objects.get(pk = pk)
        except TeamAllocation.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        teamAllocation = self.get_object(pk)
        serializer = TeamAllocationSerializer(teamAllocation)
        return Response(serializer.data)

    def put(self, request, pk):
        teamAllocation = self.get_object(pk)
        serializer = TeamAllocationSerializer(teamAllocation, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(teamAllocation.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        teamAllocation = self.get_object(pk)
        teamAllocation.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)


class GetTeamAllocationByTeamId(APIView):
    def get_object(self, teamId):
        try:
            return TeamAllocation.objects.filter(team_id = teamId)
        except TeamAllocation.DoesNotExist:
            raise Http404
    def get(self, request, teamId, format = None):
        teamAllocation = self.get_object(teamId)
        serializer = TeamAllocationSerializer(teamAllocation, many=True)
        return Response(serializer.data)

class GetTeamByEmployeeId(APIView):
    def get_object(self, emp_id):
        try:
            return TeamAllocation.objects.filter(member_id = emp_id)
        except TeamAllocation.DoesNotExist:
            raise Http404
    def get(self, request, emp_id, format = None):
        teamAllocation = self.get_object(emp_id)
        serializer = TeamAllocationSerializer(teamAllocation, many=True)
        return Response(serializer.data)


class TeamAllocationCreate(APIView):
    def post(self, request, format = None):
        serializer = CustomTeamAllocationSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)




