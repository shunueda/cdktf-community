// https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SBpfmanIoTcProgramV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#metadata DataK8SBpfmanIoTcProgramV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadata;
  /**
  * TcProgramSpec defines the desired state of TcProgram
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#spec DataK8SBpfmanIoTcProgramV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpec;
}
export interface DataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#annotations DataK8SBpfmanIoTcProgramV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#labels DataK8SBpfmanIoTcProgramV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#name DataK8SBpfmanIoTcProgramV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecret {
  /**
  * Name of the secret which contains the credentials to access the image repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#name DataK8SBpfmanIoTcProgramV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the secret which contains the credentials to access the image repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#namespace DataK8SBpfmanIoTcProgramV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecretToTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecretToHclTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImage {
  /**
  * PullPolicy describes a policy for if/when to pull a bytecode image. Defaults to IfNotPresent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#imagepullpolicy DataK8SBpfmanIoTcProgramV1Alpha1Manifest#imagepullpolicy}
  */
  readonly imagepullpolicy?: string;
  /**
  * ImagePullSecret is the name of the secret bpfman should use to get remote image repository secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#imagepullsecret DataK8SBpfmanIoTcProgramV1Alpha1Manifest#imagepullsecret}
  */
  readonly imagepullsecret?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecret;
  /**
  * Valid container image URL used to reference a remote bytecode image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#url DataK8SBpfmanIoTcProgramV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageToTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagepullpolicy: cdktf.stringToTerraform(struct!.imagepullpolicy),
    imagepullsecret: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecretToTerraform(struct!.imagepullsecret),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageToHclTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagepullpolicy: {
      value: cdktf.stringToHclTerraform(struct!.imagepullpolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagepullsecret: {
      value: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecretToHclTerraform(struct!.imagepullsecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecret",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagepullpolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagepullpolicy = this._imagepullpolicy;
    }
    if (this._imagepullsecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagepullsecret = this._imagepullsecret?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imagepullpolicy = undefined;
      this._imagepullsecret.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imagepullpolicy = value.imagepullpolicy;
      this._imagepullsecret.internalValue = value.imagepullsecret;
      this._url = value.url;
    }
  }

  // imagepullpolicy - computed: false, optional: true, required: false
  private _imagepullpolicy?: string; 
  public get imagepullpolicy() {
    return this.getStringAttribute('imagepullpolicy');
  }
  public set imagepullpolicy(value: string) {
    this._imagepullpolicy = value;
  }
  public resetImagepullpolicy() {
    this._imagepullpolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagepullpolicyInput() {
    return this._imagepullpolicy;
  }

  // imagepullsecret - computed: false, optional: true, required: false
  private _imagepullsecret = new DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecretOutputReference(this, "imagepullsecret");
  public get imagepullsecret() {
    return this._imagepullsecret;
  }
  public putImagepullsecret(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageImagepullsecret) {
    this._imagepullsecret.internalValue = value;
  }
  public resetImagepullsecret() {
    this._imagepullsecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagepullsecretInput() {
    return this._imagepullsecret.internalValue;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecode {
  /**
  * Image used to specify a bytecode container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#image DataK8SBpfmanIoTcProgramV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImage;
  /**
  * Path is used to specify a bytecode object via filepath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#path DataK8SBpfmanIoTcProgramV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeToTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageToTerraform(struct!.image),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeToHclTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImage",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image.internalValue = value.image;
      this._path = value.path;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselector {
  /**
  * Interfaces refers to a list of network interfaces to attach the BPF program to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#interfaces DataK8SBpfmanIoTcProgramV1Alpha1Manifest#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * Attach BPF program to the primary interface on the node. Only 'true' accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#primarynodeinterface DataK8SBpfmanIoTcProgramV1Alpha1Manifest#primarynodeinterface}
  */
  readonly primarynodeinterface?: boolean | cdktf.IResolvable;
}

export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselectorToTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interfaces),
    primarynodeinterface: cdktf.booleanToTerraform(struct!.primarynodeinterface),
  }
}


export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselectorToHclTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primarynodeinterface: {
      value: cdktf.booleanToHclTerraform(struct!.primarynodeinterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    if (this._primarynodeinterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarynodeinterface = this._primarynodeinterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaces = undefined;
      this._primarynodeinterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaces = value.interfaces;
      this._primarynodeinterface = value.primarynodeinterface;
    }
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // primarynodeinterface - computed: false, optional: true, required: false
  private _primarynodeinterface?: boolean | cdktf.IResolvable; 
  public get primarynodeinterface() {
    return this.getBooleanAttribute('primarynodeinterface');
  }
  public set primarynodeinterface(value: boolean | cdktf.IResolvable) {
    this._primarynodeinterface = value;
  }
  public resetPrimarynodeinterface() {
    this._primarynodeinterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarynodeinterfaceInput() {
    return this._primarynodeinterface;
  }
}
export interface DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#key DataK8SBpfmanIoTcProgramV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#operator DataK8SBpfmanIoTcProgramV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#values DataK8SBpfmanIoTcProgramV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressionsToTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressionsToHclTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressionsOutputReference {
    return new DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#match_expressions DataK8SBpfmanIoTcProgramV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#match_labels DataK8SBpfmanIoTcProgramV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorToTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorToHclTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#key DataK8SBpfmanIoTcProgramV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#operator DataK8SBpfmanIoTcProgramV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#values DataK8SBpfmanIoTcProgramV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressionsToTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressionsToHclTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressionsOutputReference {
    return new DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#match_expressions DataK8SBpfmanIoTcProgramV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#match_labels DataK8SBpfmanIoTcProgramV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorToTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorToHclTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpec {
  /**
  * BpfFunctionName is the name of the function that is the entry point for the BPF program
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#bpffunctionname DataK8SBpfmanIoTcProgramV1Alpha1Manifest#bpffunctionname}
  */
  readonly bpffunctionname: string;
  /**
  * Bytecode configures where the bpf program's bytecode should be loaded from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#bytecode DataK8SBpfmanIoTcProgramV1Alpha1Manifest#bytecode}
  */
  readonly bytecode: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecode;
  /**
  * Direction specifies the direction of traffic the tc program should attach to for a given network device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#direction DataK8SBpfmanIoTcProgramV1Alpha1Manifest#direction}
  */
  readonly direction: string;
  /**
  * GlobalData allows the user to to set global variables when the program is loaded with an array of raw bytes. This is a very low level primitive. The caller is responsible for formatting the byte string appropriately considering such things as size, endianness, alignment and packing of data structures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#globaldata DataK8SBpfmanIoTcProgramV1Alpha1Manifest#globaldata}
  */
  readonly globaldata?: { [key: string]: string };
  /**
  * Selector to determine the network interface (or interfaces)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#interfaceselector DataK8SBpfmanIoTcProgramV1Alpha1Manifest#interfaceselector}
  */
  readonly interfaceselector: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselector;
  /**
  * MapOwnerSelector is used to select the loaded eBPF program this eBPF program will share a map with. The value is a label applied to the BpfProgram to select. The selector must resolve to exactly one instance of a BpfProgram on a given node or the eBPF program will not load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#mapownerselector DataK8SBpfmanIoTcProgramV1Alpha1Manifest#mapownerselector}
  */
  readonly mapownerselector?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselector;
  /**
  * NodeSelector allows the user to specify which nodes to deploy the bpf program to. This field must be specified, to select all nodes use standard metav1.LabelSelector semantics and make it empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#nodeselector DataK8SBpfmanIoTcProgramV1Alpha1Manifest#nodeselector}
  */
  readonly nodeselector: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselector;
  /**
  * Priority specifies the priority of the tc program in relation to other programs of the same type with the same attach point. It is a value from 0 to 1000 where lower values have higher precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#priority DataK8SBpfmanIoTcProgramV1Alpha1Manifest#priority}
  */
  readonly priority: number;
  /**
  * ProceedOn allows the user to call other tc programs in chain on this exit code. Multiple values are supported by repeating the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#proceedon DataK8SBpfmanIoTcProgramV1Alpha1Manifest#proceedon}
  */
  readonly proceedon?: string[];
}

export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecToTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bpffunctionname: cdktf.stringToTerraform(struct!.bpffunctionname),
    bytecode: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeToTerraform(struct!.bytecode),
    direction: cdktf.stringToTerraform(struct!.direction),
    globaldata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.globaldata),
    interfaceselector: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselectorToTerraform(struct!.interfaceselector),
    mapownerselector: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorToTerraform(struct!.mapownerselector),
    nodeselector: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorToTerraform(struct!.nodeselector),
    priority: cdktf.numberToTerraform(struct!.priority),
    proceedon: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proceedon),
  }
}


export function dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bpffunctionname: {
      value: cdktf.stringToHclTerraform(struct!.bpffunctionname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytecode: {
      value: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeToHclTerraform(struct!.bytecode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecode",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globaldata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.globaldata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    interfaceselector: {
      value: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselectorToHclTerraform(struct!.interfaceselector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselector",
    },
    mapownerselector: {
      value: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorToHclTerraform(struct!.mapownerselector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselector",
    },
    nodeselector: {
      value: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorToHclTerraform(struct!.nodeselector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselector",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proceedon: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proceedon),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bpffunctionname !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpffunctionname = this._bpffunctionname;
    }
    if (this._bytecode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytecode = this._bytecode?.internalValue;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._globaldata !== undefined) {
      hasAnyValues = true;
      internalValueResult.globaldata = this._globaldata;
    }
    if (this._interfaceselector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceselector = this._interfaceselector?.internalValue;
    }
    if (this._mapownerselector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapownerselector = this._mapownerselector?.internalValue;
    }
    if (this._nodeselector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeselector = this._nodeselector?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._proceedon !== undefined) {
      hasAnyValues = true;
      internalValueResult.proceedon = this._proceedon;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bpffunctionname = undefined;
      this._bytecode.internalValue = undefined;
      this._direction = undefined;
      this._globaldata = undefined;
      this._interfaceselector.internalValue = undefined;
      this._mapownerselector.internalValue = undefined;
      this._nodeselector.internalValue = undefined;
      this._priority = undefined;
      this._proceedon = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bpffunctionname = value.bpffunctionname;
      this._bytecode.internalValue = value.bytecode;
      this._direction = value.direction;
      this._globaldata = value.globaldata;
      this._interfaceselector.internalValue = value.interfaceselector;
      this._mapownerselector.internalValue = value.mapownerselector;
      this._nodeselector.internalValue = value.nodeselector;
      this._priority = value.priority;
      this._proceedon = value.proceedon;
    }
  }

  // bpffunctionname - computed: false, optional: false, required: true
  private _bpffunctionname?: string; 
  public get bpffunctionname() {
    return this.getStringAttribute('bpffunctionname');
  }
  public set bpffunctionname(value: string) {
    this._bpffunctionname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bpffunctionnameInput() {
    return this._bpffunctionname;
  }

  // bytecode - computed: false, optional: false, required: true
  private _bytecode = new DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecodeOutputReference(this, "bytecode");
  public get bytecode() {
    return this._bytecode;
  }
  public putBytecode(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecBytecode) {
    this._bytecode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bytecodeInput() {
    return this._bytecode.internalValue;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // globaldata - computed: false, optional: true, required: false
  private _globaldata?: { [key: string]: string }; 
  public get globaldata() {
    return this.getStringMapAttribute('globaldata');
  }
  public set globaldata(value: { [key: string]: string }) {
    this._globaldata = value;
  }
  public resetGlobaldata() {
    this._globaldata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globaldataInput() {
    return this._globaldata;
  }

  // interfaceselector - computed: false, optional: false, required: true
  private _interfaceselector = new DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselectorOutputReference(this, "interfaceselector");
  public get interfaceselector() {
    return this._interfaceselector;
  }
  public putInterfaceselector(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecInterfaceselector) {
    this._interfaceselector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceselectorInput() {
    return this._interfaceselector.internalValue;
  }

  // mapownerselector - computed: false, optional: true, required: false
  private _mapownerselector = new DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselectorOutputReference(this, "mapownerselector");
  public get mapownerselector() {
    return this._mapownerselector;
  }
  public putMapownerselector(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecMapownerselector) {
    this._mapownerselector.internalValue = value;
  }
  public resetMapownerselector() {
    this._mapownerselector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapownerselectorInput() {
    return this._mapownerselector.internalValue;
  }

  // nodeselector - computed: false, optional: false, required: true
  private _nodeselector = new DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselectorOutputReference(this, "nodeselector");
  public get nodeselector() {
    return this._nodeselector;
  }
  public putNodeselector(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecNodeselector) {
    this._nodeselector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeselectorInput() {
    return this._nodeselector.internalValue;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // proceedon - computed: false, optional: true, required: false
  private _proceedon?: string[]; 
  public get proceedon() {
    return this.getListAttribute('proceedon');
  }
  public set proceedon(value: string[]) {
    this._proceedon = value;
  }
  public resetProceedon() {
    this._proceedon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proceedonInput() {
    return this._proceedon;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest k8s_bpfman_io_tc_program_v1alpha1_manifest}
*/
export class DataK8SBpfmanIoTcProgramV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_bpfman_io_tc_program_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SBpfmanIoTcProgramV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SBpfmanIoTcProgramV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SBpfmanIoTcProgramV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SBpfmanIoTcProgramV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_bpfman_io_tc_program_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/bpfman_io_tc_program_v1alpha1_manifest k8s_bpfman_io_tc_program_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SBpfmanIoTcProgramV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SBpfmanIoTcProgramV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_bpfman_io_tc_program_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.10.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBpfmanIoTcProgramV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SBpfmanIoTcProgramV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBpfmanIoTcProgramV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
