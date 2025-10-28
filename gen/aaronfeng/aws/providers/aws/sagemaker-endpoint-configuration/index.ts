// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerEndpointConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#id SagemakerEndpointConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#name SagemakerEndpointConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#tags SagemakerEndpointConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * data_capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#data_capture_config SagemakerEndpointConfiguration#data_capture_config}
  */
  readonly dataCaptureConfig?: SagemakerEndpointConfigurationDataCaptureConfig;
  /**
  * production_variants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#production_variants SagemakerEndpointConfiguration#production_variants}
  */
  readonly productionVariants: SagemakerEndpointConfigurationProductionVariants[] | cdktf.IResolvable;
}
export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#csv_content_types SagemakerEndpointConfiguration#csv_content_types}
  */
  readonly csvContentTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#json_content_types SagemakerEndpointConfiguration#json_content_types}
  */
  readonly jsonContentTypes?: string[];
}

export function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference | SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.csvContentTypes),
    json_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonContentTypes),
  }
}


export function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToHclTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference | SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csv_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.csvContentTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonContentTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csvContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvContentTypes = this._csvContentTypes;
    }
    if (this._jsonContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonContentTypes = this._jsonContentTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._csvContentTypes = undefined;
      this._jsonContentTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._csvContentTypes = value.csvContentTypes;
      this._jsonContentTypes = value.jsonContentTypes;
    }
  }

  // csv_content_types - computed: false, optional: true, required: false
  private _csvContentTypes?: string[]; 
  public get csvContentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('csv_content_types'));
  }
  public set csvContentTypes(value: string[]) {
    this._csvContentTypes = value;
  }
  public resetCsvContentTypes() {
    this._csvContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvContentTypesInput() {
    return this._csvContentTypes;
  }

  // json_content_types - computed: false, optional: true, required: false
  private _jsonContentTypes?: string[]; 
  public get jsonContentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('json_content_types'));
  }
  public set jsonContentTypes(value: string[]) {
    this._jsonContentTypes = value;
  }
  public resetJsonContentTypes() {
    this._jsonContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonContentTypesInput() {
    return this._jsonContentTypes;
  }
}
export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#capture_mode SagemakerEndpointConfiguration#capture_mode}
  */
  readonly captureMode: string;
}

export function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_mode: cdktf.stringToTerraform(struct!.captureMode),
  }
}


export function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToHclTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureMode = this._captureMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureMode = value.captureMode;
    }
  }

  // capture_mode - computed: false, optional: false, required: true
  private _captureMode?: string; 
  public get captureMode() {
    return this.getStringAttribute('capture_mode');
  }
  public set captureMode(value: string) {
    this._captureMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureModeInput() {
    return this._captureMode;
  }
}

export class SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList extends cdktf.ComplexList {
  public internalValue? : SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference {
    return new SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerEndpointConfigurationDataCaptureConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}
  */
  readonly destinationS3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#enable_capture SagemakerEndpointConfiguration#enable_capture}
  */
  readonly enableCapture?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}
  */
  readonly initialSamplingPercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * capture_content_type_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#capture_content_type_header SagemakerEndpointConfiguration#capture_content_type_header}
  */
  readonly captureContentTypeHeader?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader;
  /**
  * capture_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#capture_options SagemakerEndpointConfiguration#capture_options}
  */
  readonly captureOptions: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[] | cdktf.IResolvable;
}

export function sagemakerEndpointConfigurationDataCaptureConfigToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigOutputReference | SagemakerEndpointConfigurationDataCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_s3_uri: cdktf.stringToTerraform(struct!.destinationS3Uri),
    enable_capture: cdktf.booleanToTerraform(struct!.enableCapture),
    initial_sampling_percentage: cdktf.numberToTerraform(struct!.initialSamplingPercentage),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    capture_content_type_header: sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct!.captureContentTypeHeader),
    capture_options: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform, true)(struct!.captureOptions),
  }
}


export function sagemakerEndpointConfigurationDataCaptureConfigToHclTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigOutputReference | SagemakerEndpointConfigurationDataCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.destinationS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_capture: {
      value: cdktf.booleanToHclTerraform(struct!.enableCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_sampling_percentage: {
      value: cdktf.numberToHclTerraform(struct!.initialSamplingPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_content_type_header: {
      value: sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToHclTerraform(struct!.captureContentTypeHeader),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderList",
    },
    capture_options: {
      value: cdktf.listMapperHcl(sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToHclTerraform, true)(struct!.captureOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationDataCaptureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationDataCaptureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationS3Uri = this._destinationS3Uri;
    }
    if (this._enableCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCapture = this._enableCapture;
    }
    if (this._initialSamplingPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSamplingPercentage = this._initialSamplingPercentage;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._captureContentTypeHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureContentTypeHeader = this._captureContentTypeHeader?.internalValue;
    }
    if (this._captureOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureOptions = this._captureOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationDataCaptureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationS3Uri = undefined;
      this._enableCapture = undefined;
      this._initialSamplingPercentage = undefined;
      this._kmsKeyId = undefined;
      this._captureContentTypeHeader.internalValue = undefined;
      this._captureOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationS3Uri = value.destinationS3Uri;
      this._enableCapture = value.enableCapture;
      this._initialSamplingPercentage = value.initialSamplingPercentage;
      this._kmsKeyId = value.kmsKeyId;
      this._captureContentTypeHeader.internalValue = value.captureContentTypeHeader;
      this._captureOptions.internalValue = value.captureOptions;
    }
  }

  // destination_s3_uri - computed: false, optional: false, required: true
  private _destinationS3Uri?: string; 
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }
  public set destinationS3Uri(value: string) {
    this._destinationS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationS3UriInput() {
    return this._destinationS3Uri;
  }

  // enable_capture - computed: false, optional: true, required: false
  private _enableCapture?: boolean | cdktf.IResolvable; 
  public get enableCapture() {
    return this.getBooleanAttribute('enable_capture');
  }
  public set enableCapture(value: boolean | cdktf.IResolvable) {
    this._enableCapture = value;
  }
  public resetEnableCapture() {
    this._enableCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCaptureInput() {
    return this._enableCapture;
  }

  // initial_sampling_percentage - computed: false, optional: false, required: true
  private _initialSamplingPercentage?: number; 
  public get initialSamplingPercentage() {
    return this.getNumberAttribute('initial_sampling_percentage');
  }
  public set initialSamplingPercentage(value: number) {
    this._initialSamplingPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSamplingPercentageInput() {
    return this._initialSamplingPercentage;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // capture_content_type_header - computed: false, optional: true, required: false
  private _captureContentTypeHeader = new SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference(this, "capture_content_type_header");
  public get captureContentTypeHeader() {
    return this._captureContentTypeHeader;
  }
  public putCaptureContentTypeHeader(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader) {
    this._captureContentTypeHeader.internalValue = value;
  }
  public resetCaptureContentTypeHeader() {
    this._captureContentTypeHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureContentTypeHeaderInput() {
    return this._captureContentTypeHeader.internalValue;
  }

  // capture_options - computed: false, optional: false, required: true
  private _captureOptions = new SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList(this, "capture_options", false);
  public get captureOptions() {
    return this._captureOptions;
  }
  public putCaptureOptions(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[] | cdktf.IResolvable) {
    this._captureOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureOptionsInput() {
    return this._captureOptions.internalValue;
  }
}
export interface SagemakerEndpointConfigurationProductionVariants {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}
  */
  readonly initialInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}
  */
  readonly initialVariantWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}
  */
  readonly modelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}
  */
  readonly variantName?: string;
}

export function sagemakerEndpointConfigurationProductionVariantsToTerraform(struct?: SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    initial_instance_count: cdktf.numberToTerraform(struct!.initialInstanceCount),
    initial_variant_weight: cdktf.numberToTerraform(struct!.initialVariantWeight),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    model_name: cdktf.stringToTerraform(struct!.modelName),
    variant_name: cdktf.stringToTerraform(struct!.variantName),
  }
}


export function sagemakerEndpointConfigurationProductionVariantsToHclTerraform(struct?: SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.initialInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_variant_weight: {
      value: cdktf.numberToHclTerraform(struct!.initialVariantWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_name: {
      value: cdktf.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variant_name: {
      value: cdktf.stringToHclTerraform(struct!.variantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationProductionVariantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._initialInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialInstanceCount = this._initialInstanceCount;
    }
    if (this._initialVariantWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialVariantWeight = this._initialVariantWeight;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._variantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantName = this._variantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorType = undefined;
      this._initialInstanceCount = undefined;
      this._initialVariantWeight = undefined;
      this._instanceType = undefined;
      this._modelName = undefined;
      this._variantName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorType = value.acceleratorType;
      this._initialInstanceCount = value.initialInstanceCount;
      this._initialVariantWeight = value.initialVariantWeight;
      this._instanceType = value.instanceType;
      this._modelName = value.modelName;
      this._variantName = value.variantName;
    }
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // initial_instance_count - computed: false, optional: false, required: true
  private _initialInstanceCount?: number; 
  public get initialInstanceCount() {
    return this.getNumberAttribute('initial_instance_count');
  }
  public set initialInstanceCount(value: number) {
    this._initialInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInstanceCountInput() {
    return this._initialInstanceCount;
  }

  // initial_variant_weight - computed: false, optional: true, required: false
  private _initialVariantWeight?: number; 
  public get initialVariantWeight() {
    return this.getNumberAttribute('initial_variant_weight');
  }
  public set initialVariantWeight(value: number) {
    this._initialVariantWeight = value;
  }
  public resetInitialVariantWeight() {
    this._initialVariantWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialVariantWeightInput() {
    return this._initialVariantWeight;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // model_name - computed: false, optional: false, required: true
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // variant_name - computed: true, optional: true, required: false
  private _variantName?: string; 
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  public resetVariantName() {
    this._variantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
  }
}

export class SagemakerEndpointConfigurationProductionVariantsList extends cdktf.ComplexList {
  public internalValue? : SagemakerEndpointConfigurationProductionVariants[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerEndpointConfigurationProductionVariantsOutputReference {
    return new SagemakerEndpointConfigurationProductionVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration}
*/
export class SagemakerEndpointConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_endpoint_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerEndpointConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerEndpointConfiguration to import
  * @param importFromId The id of the existing SagemakerEndpointConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerEndpointConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_endpoint_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerEndpointConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerEndpointConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_endpoint_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._tags = config.tags;
    this._dataCaptureConfig.internalValue = config.dataCaptureConfig;
    this._productionVariants.internalValue = config.productionVariants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // data_capture_config - computed: false, optional: true, required: false
  private _dataCaptureConfig = new SagemakerEndpointConfigurationDataCaptureConfigOutputReference(this, "data_capture_config");
  public get dataCaptureConfig() {
    return this._dataCaptureConfig;
  }
  public putDataCaptureConfig(value: SagemakerEndpointConfigurationDataCaptureConfig) {
    this._dataCaptureConfig.internalValue = value;
  }
  public resetDataCaptureConfig() {
    this._dataCaptureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCaptureConfigInput() {
    return this._dataCaptureConfig.internalValue;
  }

  // production_variants - computed: false, optional: false, required: true
  private _productionVariants = new SagemakerEndpointConfigurationProductionVariantsList(this, "production_variants", false);
  public get productionVariants() {
    return this._productionVariants;
  }
  public putProductionVariants(value: SagemakerEndpointConfigurationProductionVariants[] | cdktf.IResolvable) {
    this._productionVariants.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionVariantsInput() {
    return this._productionVariants.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      data_capture_config: sagemakerEndpointConfigurationDataCaptureConfigToTerraform(this._dataCaptureConfig.internalValue),
      production_variants: cdktf.listMapper(sagemakerEndpointConfigurationProductionVariantsToTerraform, true)(this._productionVariants.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      data_capture_config: {
        value: sagemakerEndpointConfigurationDataCaptureConfigToHclTerraform(this._dataCaptureConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerEndpointConfigurationDataCaptureConfigList",
      },
      production_variants: {
        value: cdktf.listMapperHcl(sagemakerEndpointConfigurationProductionVariantsToHclTerraform, true)(this._productionVariants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerEndpointConfigurationProductionVariantsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
