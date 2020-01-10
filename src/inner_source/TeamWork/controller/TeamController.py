from TeamWork.models import Team
from TeamWork.serializers.teamSerializer import TeamSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class TeamList(APIView):
    def get(self, request, format = None):
        """
        List all Team, or create a new Team.
        """
        team = Team.objects.all()
        serializer = TeamSerializer(team, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = TeamSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class TeamDetail(APIView):
    def get_object(self, pk):
        try:
            return Team.objects.get(pk = pk)
        except Team.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        team = self.get_object(pk)
        serializer = TeamSerializer(team)
        return Response(serializer.data)

    def put(self, request, pk):
        team = self.get_object(pk)
        serializer = TeamSerializer(team, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(team.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        team = self.get_object(pk)
        team.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)







