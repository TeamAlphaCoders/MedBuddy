import pandas as pd
import numpy as np
import tensorflow as tf 
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
from keras import regularizers
from sklearn.preprocessing import StandardScaler

df_t1d = pd.read_csv('t1diabetes.csv', index_col= 'ID')
df_t2d = pd.read_csv('t2diabetes.csv', index_col= 'Index')
df_park = pd.read_csv('parkison.csv',  index_col='Index')
df_hemo = pd.read_csv('hemophillia.csv', index_col= 'ID')
df_sickel = pd.read_csv('sickel.csv', index_col='Index')

cat_data_t1d = ['Type 1 Diabetes','Parent 1 T1D', 'Parent 2 T1D', 'Smoking', 'Alcohol', 'Exercise']
label_encoder = LabelEncoder()

for col in cat_data_t1d:
    
    df_t1d[col] = label_encoder.fit_transform(df_t1d[col])

cat_data_t2d = ['Type 2 Diabetes', 'Gender', 'Smoking', 'Alcohol', 'Exercise']

for col in cat_data_t2d:
    
    df_t2d[col] = label_encoder.fit_transform(df_t2d[col])

cat_data_park = ["Parkinson's Disease", "Parents with Parkinson's", "Grandparents with Parkinson's", "Great Grandparents with Parkinson's", "Gender", "Smoking Status", "Alcohol Consumption", "Exercise Level"]

for col in cat_data_park:
    
    df_park[col] = label_encoder.fit_transform(df_park[col])

cat_data_sickel = ['Sickle Cell Anemia', 'Parents with Disease','Grandparents with Disease', 'Great-Grandparents with Disease','Gender', 'Smoking', 'Alcohol', 'Exercise']

for col in cat_data_sickel:
    
    df_sickel[col] = label_encoder.fit_transform(df_sickel[col])


cat_data_hemo = ['Hemophilia', 'Parents_With_Hemophilia','Grandparents_With_Hemophilia','GreatGrandparents_With_Hemophilia','Smoking', 'Alcohol', 'Exercise', 'Gender']

for col in cat_data_hemo:
    
    df_hemo[col] = label_encoder.fit_transform(df_hemo[col])

df_park.iloc[:, 0]/=2
df_sickel.iloc[:, 0]/=2

X_t1d = df_t1d.iloc[:, 1:]
y_t1d = df_t1d.iloc[:, 0]
X_t1d_train, X_t1d_test, y_t1d_train, y_t1d_test = train_test_split(X_t1d, y_t1d, test_size=0.6, random_state=42)

scaler = StandardScaler()
X_t1d_train = scaler.fit_transform(X_t1d_train)
X_t1d_test = scaler.transform(X_t1d_test)

model_t1d = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='tanh', input_shape=(X_t1d_train.shape[1],), kernel_regularizer=regularizers.l2(0.01)),
    tf.keras.layers.Dropout(0.9),
    tf.keras.layers.Dense(64, activation='tanh', kernel_regularizer=regularizers.l2(0.01)),
    tf.keras.layers.Dropout(0.85),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
model_t1d.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model_t1d.fit(X_t1d_train, y_t1d_train, epochs=10, batch_size=128, validation_data=(X_t1d_test, y_t1d_test))
predictions = model_t1d.predict(X_t1d_test)

X_t2d = df_t2d.iloc[:, 1:]
y_t2d = df_t2d.iloc[:, 0]
X_t2d_train, X_t2d_test, y_t2d_train, y_t2d_test = train_test_split(X_t2d, y_t2d, test_size=0.6, random_state=42)

X_t2d_train = scaler.fit_transform(X_t2d_train)
X_t2d_test = scaler.transform(X_t2d_test)

model_t2d = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='tanh', input_shape=(X_t2d_train.shape[1],), kernel_regularizer=regularizers.l2(0.01)),
    tf.keras.layers.Dropout(0.9),
    tf.keras.layers.Dense(64, activation='tanh', kernel_regularizer=regularizers.l2(0.01)),
    tf.keras.layers.Dropout(0.85),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
model_t2d.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model_t2d.fit(X_t2d_train, y_t2d_train, epochs=10, batch_size=128, validation_data=(X_t2d_test, y_t2d_test))
predictions_t2d = model_t2d.predict(X_t2d_test)

X_hemo = df_hemo.iloc[:, 1:]
y_hemo = df_hemo.iloc[:, 0]
X_hemo_train, X_hemo_test, y_hemo_train, y_hemo_test = train_test_split(X_hemo, y_hemo, test_size=0.6, random_state=42)

X_hemo_train = scaler.fit_transform(X_hemo_train)
X_hemo_test = scaler.transform(X_hemo_test)

model_hemo = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='tanh', input_shape=(X_hemo_train.shape[1],), kernel_regularizer=regularizers.l2(0.01)),
    tf.keras.layers.Dropout(0.8),
    tf.keras.layers.Dense(64, activation='tanh', kernel_regularizer=regularizers.l2(0.11)),
    tf.keras.layers.Dropout(0.85),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
model_hemo.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model_hemo.fit(X_hemo_train, y_hemo_train, epochs=10, batch_size=128, validation_data=(X_hemo_test, y_hemo_test))
predictions_hemo = model_hemo.predict(X_hemo_test)

X_park = df_park.iloc[:, 1:]
y_park = df_park.iloc[:, 0]
X_park_train, X_park_test, y_park_train, y_park_test = train_test_split(X_park, y_park, test_size=0.6, random_state=42)

X_park_train = scaler.fit_transform(X_park_train)
X_park_test = scaler.transform(X_park_test)

model_park = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='tanh', input_shape=(X_park_train.shape[1],), kernel_regularizer=regularizers.l2(0.01)),
    tf.keras.layers.Dropout(0.9),
    tf.keras.layers.Dense(64, activation='tanh', kernel_regularizer=regularizers.l2(0.01)),
    tf.keras.layers.Dropout(0.85),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
model_park.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model_park.fit(X_park_train, y_park_train, epochs=10, batch_size=128, validation_data=(X_park_test, y_park_test))
predictions_park = model_park.predict(X_park_test)

X_sickel = df_sickel.iloc[:, 1:]
y_sickel = df_sickel.iloc[:, 0]
X_sickel_train, X_sickel_test, y_sickel_train, y_sickel_test = train_test_split(X_sickel, y_sickel, test_size=0.6, random_state=42)

X_sickel_train = scaler.fit_transform(X_sickel_train)
X_sickel_test = scaler.transform(X_sickel_test)

model_sickel = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='tanh', input_shape=(X_sickel_train.shape[1],), kernel_regularizer=regularizers.l2(0.01)),
    tf.keras.layers.Dropout(0.8),
    tf.keras.layers.Dense(64, activation='tanh', kernel_regularizer=regularizers.l2(0.01)),
    tf.keras.layers.Dropout(0.85),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
model_sickel.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model_sickel.fit(X_sickel_train, y_sickel_train, epochs=10, batch_size=128, validation_data=(X_park_test, y_park_test))
predictions_sickel = model_sickel.predict(X_park_test)

predictions_t1d = model_t1d.predict(X_t1d_test)
y_t1d_test_array = y_t1d_test.to_numpy()

predictions_t2d = model_t2d.predict(X_t2d_test)
y_t2d_test_array = y_t2d_test.to_numpy()

predictions_hemo = model_hemo.predict(X_hemo_test)
y_hemo_test_array = y_hemo_test.to_numpy()

predictions_park = model_park.predict(X_park_test)
y_park_test_array = y_park_test.to_numpy()

predictions_park = model_sickel.predict(X_sickel_test)
y_sickel_test_array = y_sickel_test.to_numpy()

for i in range(10):
    print(f"Probability of having Type 1 Diabetes, Type 2 Diabetes (Example {i+11}): {predictions_t1d[i+10][0]:.2f}, {predictions_t2d[i+10][0]:.2f}, {predictions_hemo[i+10][0]:.2f}, {predictions_park[i+10][0]:.2f}, {predictions_sickel[i+10][0]:.2f}")
    print(f'Actual result: {y_t1d_test_array[i+10]:.2f},{y_t2d_test_array[i+10]:.2f}, {y_hemo_test_array[i+10]:.2f}, {y_park_test_array[i+10]:.2f}, {y_sickel_test_array[i+10]:.2f}')