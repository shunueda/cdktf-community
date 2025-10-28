// https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RelationToStaticLeafConfig extends cdktf.TerraformMetaArguments {
  /**
  * The annotation of the Relation To Static Leaf object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#annotation RelationToStaticLeaf#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#annotations RelationToStaticLeaf#annotations}
  */
  readonly annotations?: RelationToStaticLeafAnnotations[] | cdktf.IResolvable;
  /**
  * The deployment immediacy of the Relation To Static Leaf object. Specifies when the policy is pushed into the hardware policy content-addressable memory (CAM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#deployment_immediacy RelationToStaticLeaf#deployment_immediacy}
  */
  readonly deploymentImmediacy?: string;
  /**
  * The description of the Relation To Static Leaf object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#description RelationToStaticLeaf#description}
  */
  readonly description?: string;
  /**
  * The VLAN encapsulation of the Relation To Static Leaf object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#encapsulation RelationToStaticLeaf#encapsulation}
  */
  readonly encapsulation: string;
  /**
  * The static association mode with the path of the Relation To Static Leaf object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#mode RelationToStaticLeaf#mode}
  */
  readonly mode?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#parent_dn RelationToStaticLeaf#parent_dn}
  */
  readonly parentDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#tags RelationToStaticLeaf#tags}
  */
  readonly tags?: RelationToStaticLeafTags[] | cdktf.IResolvable;
  /**
  * The distinguished name of the target of this static binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#target_dn RelationToStaticLeaf#target_dn}
  */
  readonly targetDn: string;
}
export interface RelationToStaticLeafAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#key RelationToStaticLeaf#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#value RelationToStaticLeaf#value}
  */
  readonly value: string;
}

export function relationToStaticLeafAnnotationsToTerraform(struct?: RelationToStaticLeafAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function relationToStaticLeafAnnotationsToHclTerraform(struct?: RelationToStaticLeafAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RelationToStaticLeafAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RelationToStaticLeafAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelationToStaticLeafAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class RelationToStaticLeafAnnotationsList extends cdktf.ComplexList {
  public internalValue? : RelationToStaticLeafAnnotations[] | cdktf.IResolvable

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
  public get(index: number): RelationToStaticLeafAnnotationsOutputReference {
    return new RelationToStaticLeafAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RelationToStaticLeafTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#key RelationToStaticLeaf#key}
  */
  readonly key: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#value RelationToStaticLeaf#value}
  */
  readonly value: string;
}

export function relationToStaticLeafTagsToTerraform(struct?: RelationToStaticLeafTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function relationToStaticLeafTagsToHclTerraform(struct?: RelationToStaticLeafTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RelationToStaticLeafTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RelationToStaticLeafTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RelationToStaticLeafTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class RelationToStaticLeafTagsList extends cdktf.ComplexList {
  public internalValue? : RelationToStaticLeafTags[] | cdktf.IResolvable

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
  public get(index: number): RelationToStaticLeafTagsOutputReference {
    return new RelationToStaticLeafTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf aci_relation_to_static_leaf}
*/
export class RelationToStaticLeaf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_relation_to_static_leaf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RelationToStaticLeaf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RelationToStaticLeaf to import
  * @param importFromId The id of the existing RelationToStaticLeaf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RelationToStaticLeaf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_relation_to_static_leaf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/relation_to_static_leaf aci_relation_to_static_leaf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RelationToStaticLeafConfig
  */
  public constructor(scope: Construct, id: string, config: RelationToStaticLeafConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_relation_to_static_leaf',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._annotations.internalValue = config.annotations;
    this._deploymentImmediacy = config.deploymentImmediacy;
    this._description = config.description;
    this._encapsulation = config.encapsulation;
    this._mode = config.mode;
    this._parentDn = config.parentDn;
    this._tags.internalValue = config.tags;
    this._targetDn = config.targetDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new RelationToStaticLeafAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: RelationToStaticLeafAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // deployment_immediacy - computed: true, optional: true, required: false
  private _deploymentImmediacy?: string; 
  public get deploymentImmediacy() {
    return this.getStringAttribute('deployment_immediacy');
  }
  public set deploymentImmediacy(value: string) {
    this._deploymentImmediacy = value;
  }
  public resetDeploymentImmediacy() {
    this._deploymentImmediacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentImmediacyInput() {
    return this._deploymentImmediacy;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encapsulation - computed: false, optional: false, required: true
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // parent_dn - computed: false, optional: false, required: true
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new RelationToStaticLeafTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: RelationToStaticLeafTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: false, optional: false, required: true
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(relationToStaticLeafAnnotationsToTerraform, false)(this._annotations.internalValue),
      deployment_immediacy: cdktf.stringToTerraform(this._deploymentImmediacy),
      description: cdktf.stringToTerraform(this._description),
      encapsulation: cdktf.stringToTerraform(this._encapsulation),
      mode: cdktf.stringToTerraform(this._mode),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      tags: cdktf.listMapper(relationToStaticLeafTagsToTerraform, false)(this._tags.internalValue),
      target_dn: cdktf.stringToTerraform(this._targetDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.listMapperHcl(relationToStaticLeafAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RelationToStaticLeafAnnotationsList",
      },
      deployment_immediacy: {
        value: cdktf.stringToHclTerraform(this._deploymentImmediacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encapsulation: {
        value: cdktf.stringToHclTerraform(this._encapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(relationToStaticLeafTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RelationToStaticLeafTagsList",
      },
      target_dn: {
        value: cdktf.stringToHclTerraform(this._targetDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
