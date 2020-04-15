trainingSet, testSet = train_test_split(data, test_size=0.2)
sample = testSet.tail(10)
sample2 = testSet.head(10)
print(sample.reset_index(drop=True))
print(sample2.reset_index(drop=True))
result = DataFrame({'class': []})
result = sample.reset_index(drop=True)['class'] ==sample2.reset_index(drop=True)['class']
print(result.value_counts())
sample['classDiff?'] = numpy.where(sample['class'] == sample2['class'], 'true','false')
examples = sample2['message']
example_counts = vectorizer.transform(examples)
predictions = classifier.predict(example_counts)
predictDF = DataFrame({'class':[]})
predictDF = predictions
print (predictDF)
#print (sample2['class'])