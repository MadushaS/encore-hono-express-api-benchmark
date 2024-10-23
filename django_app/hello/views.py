from django.http import JsonResponse

def hello_fn(request):
    return JsonResponse({'message': 'Hello World!'})